// public API - https://docs.github.com/en/rest
// calls should include header:
// Accept: application/vnd.github.v3+json

// OBJECTIVE 1

// step 1:
// create a function that takes in a value and searches
// the github api for that name

function fetchGithubByValue(value) {
    fetch(`https://api.github.com/search/users?q=${value}`, {
        headers: {
            "Accept": "application/vnd.github.v3+json"
        }
    })
    .then(r = r.json())
    .then(json => {
        userList.innerHTML = '';
        json.items.forEach(user => {
            appendLi(createLi(user));
        })
    });
}

// step 2:
// add an event listener to my submit button 
// take the value of the input box 
// call my fetch function with that value

const submitBtn = document.getElementById('submit-button')
const searchBox = document.getElementById('search')
const userList = document.getElementById('user-list')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    fetchGithubByValue(searchBox.value)
})

//OBECTIVE 2

// step 1: create a function to create an li with the user data
function createLi(user) {
    const li = document.createElement('li');
    li.innerHTML = user.login;
    return li;
}
// step 2: create afunction to append the li to the user data
function appendLi(li) {
    userList.append(li);
}