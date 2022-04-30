const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

module.exports = {
  Query: {
    issues: async (parent, args, context) => {
      return await prisma.issue.findMany()
    },
    issue: async (parent, { input }, context) => {
      const { id } = input
      const issue = await prisma.issue.findUnique({
        where: {
          id
        }
      })

      return issue
    }
  }
}