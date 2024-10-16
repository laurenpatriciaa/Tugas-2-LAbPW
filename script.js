const root = document.querySelector('.root');

const notification = document.createElement('div');
notification.classList.add('notification', 'active');
notification.innerHTML = `
    <p>Selamat datang! Silakan isi form di bawah ini.</p>
    <button id="ok-button">OK</button>
`;
root.appendChild(notification);

const title = document.createElement('h1');
title.textContent = 'Tugas-2 Praktikum Pemrograman Web';
title.style.textAlign = 'center';
title.style.position = 'relative';
title.style.display = 'inline-block';
title.style.margin = '20px 0';

const underline = document.createElement('div');
underline.style.height = '2px';
underline.style.backgroundColor = 'black';
underline.style.width = '100%';
underline.style.position = 'absolute';
underline.style.bottom = '-5px';
underline.style.left = '0';

title.appendChild(underline);
root.appendChild(title);

const successNotification = document.createElement('div');
successNotification.id = 'successNotification';
successNotification.classList.add('success-notification');
successNotification.innerHTML = `
    <p>Form berhasil disubmit</p>
    <button id="success-ok-button">OK</button>
`;
root.appendChild(successNotification);

const formContainer = document.createElement('div');
formContainer.classList.add('form-container');

const formSection = document.createElement('div');
formSection.classList.add('form-section');
formSection.innerHTML = `
    <form id="myForm">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Rivaldo Pardede" disabled>
        <label for="nim">NIM:</label>
        <input type="text" id="nim" name="nim" placeholder="221401060" disabled>
        <label for="kom">KOM:</label>
        <input type="text" id="kom" name="kom" placeholder="C" disabled>
        <label for="photo">Upload Photo:</label>
        <input type="file" id="photo" name="photo" accept="image/*" disabled>
        <button type="submit" disabled>Submit</button>
    </form>
`;
formContainer.appendChild(formSection);

const displayContainer = document.createElement('div');
displayContainer.id = 'displayContainer';
displayContainer.classList.add('display-container');

const uploadedImage = document.createElement('img');
uploadedImage.id = 'uploadedImage';
uploadedImage.alt = 'Uploaded Photo';
uploadedImage.style.maxWidth = '100%';
displayContainer.appendChild(uploadedImage);

const infoTable = document.createElement('table');
infoTable.classList.add('info-table');
infoTable.innerHTML = `
    <tr><td>Username: <span id="displayUsername"></span></td></tr>
    <tr><td>NIM: <span id="displayNim"></span></td></tr>
    <tr><td>KOM: <span id="displayKom"></span></td></tr>
`;
displayContainer.appendChild(infoTable);

displayContainer.style.display = 'none';
formContainer.appendChild(displayContainer);

root.appendChild(formContainer);

document.getElementById('ok-button').addEventListener('click', () => {
    notification.classList.remove('active');
    document.getElementById('username').disabled = false;
    document.getElementById('nim').disabled = false;
    document.getElementById('kom').disabled = false;
    document.getElementById('photo').disabled = false;
    document.querySelector('button[type="submit"]').disabled = false;
});

const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const nim = document.getElementById('nim').value;
    const kom = document.getElementById('kom').value;
    const photo = document.getElementById('photo').files[0];

    if (!username || !nim || !kom || !photo) {
        alert("Mohon isi semua data yang diperlukan.");
        return;
    }

    successNotification.classList.add('active');

    const reader = new FileReader();
    reader.onload = function(e) {
        uploadedImage.src = e.target.result;
    }
    reader.readAsDataURL(photo);

    document.getElementById('displayUsername').textContent = username;
    document.getElementById('displayNim').textContent = nim;
    document.getElementById('displayKom').textContent = kom;

    displayContainer.style.display = 'none';
});

document.getElementById('success-ok-button').addEventListener('click', () => {
    successNotification.classList.remove('active');
    displayContainer.style.display = 'block';
});
