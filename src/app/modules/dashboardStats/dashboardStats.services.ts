import prisma from "../../utils/prismaClient"

const dashboardStats = async () => {
  const totalLostReports = await prisma.lostItems.count()
  const totalFoundReports = await prisma.foundItem.count()
  const totalUsers = await prisma.user.count()

  return {
    totalFoundReports, totalLostReports, totalUsers
  }
}


export const DashboardServices = { dashboardStats }