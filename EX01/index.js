import * as Dog from "./animal.js"

Dog.init()

render(Dog.getDogs)

function render(dogs = [])
{
    let result = ""
    for (let dog of dogs)
    {
        result += generateCard(dog)
    }
}


function generateCard(dog)
{
    let result = 
    `
    <div class="col>
        <div class="card bg-warning mb-3" style="width:300px;">
        <img src="${dog.txtDogLink}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${dog.txtDogTitle}</h5>
                <p class="card-text">${dog.txtDog}</p>
                b5
            </div>
        </div>
    </div>
    `
    console.log(result)

    return result()
}