const userList = document.getElementById("user-list");
const searchInput = document.getElementById("search");

async function fetchUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();
        displayUsers(users);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

function displayUsers(users) {
    const sortedUsers = users
        .filter(user => /^[A-ჰ]/.test(user.name))
        .sort((a, b) => a.name.localeCompare(b.name, "ka"));

    renderList(sortedUsers);

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredUsers = sortedUsers.filter(user =>
            user.name.toLowerCase().includes(searchTerm)
        );
        renderList(filteredUsers);
    });
}

function renderList(users) {
    userList.innerHTML = users
        .map(user => `<li>${user.name} - ${user.email}</li>`)
        .join("");
}

fetchUsers();
