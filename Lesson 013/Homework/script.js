document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const checkBtn = document.getElementById('checkBtn');
    const idList = document.getElementById('idList');
    const idInput = document.getElementById('idInput');
    const result = document.getElementById('result');

    const loadIDs = () => {
        const ids = JSON.parse(localStorage.getItem('ids')) || [];
        idList.innerHTML = ids.map((id, index) => `<li>${id} - Index: ${index}</li>`).join('');
        return ids;
    };

    const saveID = (id) => {
        const ids = loadIDs();
        ids.push(id);
        localStorage.setItem('ids', JSON.stringify(ids));
        loadIDs();
    };

    const generateRandomID = () => {
        return `ID-${Math.random().toString(36).substr(2, 9)}`;
    };

    generateBtn.addEventListener('click', () => {
        const newID = generateRandomID();
        saveID(newID);
    });

    checkBtn.addEventListener('click', () => {
        const inputID = idInput.value.trim();
        if (!inputID) {
            result.textContent = 'Please enter an ID.';
            return;
        }

        const ids = loadIDs();
        const index = ids.indexOf(inputID);
        if (index !== -1) {
            result.textContent = `Key-ID: ${inputID}, Value-Index: ${index}`;
        } else {
            result.textContent = 'ID does not exist.';
        }
    });

    loadIDs();
});
