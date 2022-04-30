const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

module.exports = {
  Mutation: {
    createIssue: async (parent, { input }) => {
      const { title, description } = input
  
      try {
        const issue = await prisma.issue.create({
          data: {
            title,
            description
          }
        })
  
        return {
          success: true,
          issue
        }
      }
      catch(error){
        return {
          success: false,
          error
        }
      }
    },
    updateIssue: async (parent, { input }) => {
      const { id, title, description } = input
  
      try {
        const issue = await prisma.issue.update({
          data: {
            title,
            description
          },
          where: {
            id
          }
        })
  
        return {
          success: true,
          issue
        }
      }
      catch(error){
        return {
          success: false,
          error
        }
      }
    },
    deleteIssue: async (parent, { input }) => {
      const { id } = input
  
      try {
        await prisma.issue.delete({
          where: { 
            id
          }
        })
  
        return {
          success: true
        }
      }
      catch(error){
        return {
          success: false,
          error
        }
      }
    }
  }
}