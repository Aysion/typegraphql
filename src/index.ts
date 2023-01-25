import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
	const tenant = await prisma.tenant.create({
		data: {
			name: 'main',
			subdomain: 'teste',
		}
	})

	console.log({ tenant })

	const propertyCategory = await prisma.propertyCategory.create({
		data: {
			tenantId: 1,
			name: 'Alice',
		},
	})
	console.log({ propertyCategory })
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
