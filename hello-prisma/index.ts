import Photon from './prisma/node_modules/@generated/photon'

const photon = new Photon()

async function main() {

    // Open connection to database
    await photon.connect()

    const newUser = await photon.users.create({
        data: {
            name: 'Alice',
            email: 'alice@prisma.io'
        }
    });

    console.log(newUser)

    const allUsers = await photon.users.findMany()
    console.log(allUsers)

    // You'll write your Photon code here

    // Close connection to database
    await photon.disconnect()
}

main()