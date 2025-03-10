const userList = document.getElementById("user-list");
const searchInput = document.getElementById("search");
const errorMessage = document.getElementById("error-message");

async function fetchUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
            handleError(res.status);
            return;
        }

        errorMessage.style.display = "none";
        const users = await res.json();
        displayUsers(users);
    } catch (error) {
        showError("კავშირის შეცდომა. სცადეთ მოგვიანებით.", "server-error");
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

function handleError(status) {
    if (status >= 200 && status < 300) {
        showError("მონაცემები წარმატებით მიღებულია.", "success");
    } else if ([301, 302, 304].includes(status)) {
        showError("გადამისამართება ხდება...", "redirect");
    } else if (status >= 400 && status < 500) {
        showError("მოთხოვნა არასწორია. გადაამოწმეთ URL.", "client-error");
    } else if (status >= 500) {
        showError("სერვერის პრობლემა. სცადეთ მოგვიანებით.", "server-error");
    }
}

function showError(message, type) {
    errorMessage.textContent = message;
    errorMessage.className = type;
    errorMessage.style.display = "block";
}

fetchUsers();
