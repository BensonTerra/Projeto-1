class Dog
{
    txtDogLink = ""
    txtDogTitle = ""
    txtDog = ""

    constructor(txtDogLink,txtDogTitle,txtDog) 
    {
        this.txtDogLink = txtDogLink
        this.txtDogTitle = txtDogTitle
        this.txtDog = txtDog
    }
}

let dogs = []

export function init()
{
    let dogAdd = {}

    dogAdd = new Dog("Buldogue","Buldogue","https://www.google.com/search?q=buldogue&sxsrf=APwXEdciZ-te8-5WxiGaV6mtI1v1YZvSqQ:1683122488954&tbm=isch&source=iu&ictx=1&vet=1&fir=sdFxp3Rw0sdnwM%252CIstFzwOFQDoluM%252C_%253B8bIViGhiY4ru0M%252CaATDpNSLWOkmwM%252C_%253BWixu9qXg1NRE7M%252Cu3hdryPXl3pTeM%252C_%253ByPbsL9fp-tAI4M%252CwQoRnerBKkgRHM%252C_%253BDGNviXAuSrBYdM%252C5tWYQ499XT-t1M%252C_&usg=AI4_-kR8KC0sbsKonaA__MMa5ccIeOuClQ&sa=X&ved=2ahUKEwia5sTwp9n-AhUVrqQKHRzyCScQ_h16BAg5EAE#imgrc=sdFxp3Rw0sdnwM")
    dogs.push(dogAdd)

    dogAdd = new Dog("Buldogue Terrie","Buldogue Terrier","https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FBoston_terrier&psig=AOvVaw08y9ymD9ROd8NAEmgyPTG0&ust=1683209108425000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIC8hdqo2f4CFQAAAAAdAAAAABAE")
    dogs.push(dogAdd)

    dogAdd = new Dog("Pastor Alemão","Pastor Alemão","https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FPastor-alem%25C3%25A3o&psig=AOvVaw1Z0N_69vRsbamlNCFgU3bl&ust=1683209148373000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPj4_uyo2f4CFQAAAAAdAAAAABAE")
    dogs.push(dogAdd)

    dogAdd = new Dog("Buldogue Terrie","Buldogue Terrier","https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FBoston_terrier&psig=AOvVaw08y9ymD9ROd8NAEmgyPTG0&ust=1683209108425000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIC8hdqo2f4CFQAAAAAdAAAAABAE")
    dogs.push(dogAdd)
}
//init()
//console.table(dogs)

export function getDogs()
{
    return dogs
}
