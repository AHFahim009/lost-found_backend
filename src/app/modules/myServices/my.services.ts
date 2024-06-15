import prisma from "../../utils/prismaClient";

const myLostReport = async (userId: string) => {


  const result = await prisma.lostItems.findMany({
    where: {
      userId: userId,
    },
  });
  return result;
};
const myFoundReport = async (userId: string) => {
  const result = await prisma.foundItem.findMany({
    where: {
      userId: userId,
    },
  });
  return result;
};
const myClaimReport = async (userId: string) => {
  const result = await prisma.claim.findMany({
    where: {
      userId: userId,
    },
  });
  return result;
};

const myStats = async (userId: string) => {
  const foundReports = await prisma.foundItem.count({
    where: { userId },
  });

  const lostReports = await prisma.lostItems.count({
    where: { userId },
  });

  const claimReportsTotal = await prisma.claim.count({
    where: { userId },
  });

  const claimReportsPending = await prisma.claim.count({
    where: { userId, status: "PENDING" },
  });

  const claimReportsApproved = await prisma.claim.count({
    where: { userId, status: "APPROVED" },
  });
  const claimReportsRejected = await prisma.claim.count({
    where: { userId, status: "REJECTED" },
  });

  const userActivity = {
    totalFoundReport: foundReports,
    totalLostReport: lostReports,
    totalClaimReport: {
      total: claimReportsTotal,
      pending: claimReportsPending,
      approved: claimReportsApproved,
      rejected: claimReportsRejected,
    },
  };

  return userActivity;
};

export const MyServices = {
  myLostReport,
  myFoundReport,
  myClaimReport,
  myStats
};
