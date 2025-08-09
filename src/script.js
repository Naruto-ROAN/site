import VAR from './var.js';

const gridElement = document.getElementById('grid');
const rolesId = new Map();

for (const key in VAR.ROLES) {
    const roleHTML = 
        `<div class="role" id="${key}">
            <img class="roleImg" src="./images/${VAR.ROLES[key].imageSrc}" alt="Ошибка :(">
            ${VAR.ROLES[key].name.split(' ').join('<br>')}
        </div>`;
    const roleStatus = VAR.ROLES[key].player ? `Роль: <a href="${VAR.ROLES[key].player}" target="_blank"><u>Занята</u></a>` : 'Роль: Свободна';
    rolesId.set(key, `${roleStatus}<br><br>${VAR.ROLES[key].description}`);
    gridElement.innerHTML += roleHTML;
}

document.addEventListener('DOMContentLoaded', function() {
    const menuButtons = document.querySelectorAll('.menuButton');
    const roleButtons = document.querySelectorAll('.role');
    const buttonStatuses = new Map();

    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = document.getElementById('content');
            const rolesGrid = document.getElementById('grid');

            content.classList.add('fade-out');
            button.id == 'ROLES' ? rolesGrid.classList.remove('hidden') : rolesGrid.classList.add('hidden');
            
            setTimeout(() => {
                content.innerHTML = VAR.MENU_TEXT[button.id];
                content.classList.remove('fade-out');
            }, 150);
        });
    });

    roleButtons.forEach(button => {
        buttonStatuses.set(button.id, false);

        button.addEventListener('click', () => {
            const roleId = button.id;
            const roleHTML = button.innerHTML;

            let discriptionFontSize = screen.width <= 767 ? '9px' : 'medium';
            let roleFontSize = screen.width > 767 ? 'x-large' : 'medium'

            if (buttonStatuses.get(roleId)) {
                button.classList.add('fade-out');
                const html = buttonStatuses.get(roleId);

                setTimeout(() => {
                    button.style.textAlign = 'center';
                    button.style.fontSize = roleFontSize;
                    button.innerHTML = html;
                    button.classList.remove('fade-out');
                }, 150);
    
                buttonStatuses.delete(roleId);
                buttonStatuses.set(roleId, false);
                return;
            }

            buttonStatuses.set(roleId, roleHTML);
            button.classList.add('fade-out');
            setTimeout(() => {
                button.innerHTML = rolesId.get(roleId);
                button.style.fontSize = discriptionFontSize;
                button.style.textAlign = 'justify';
                button.classList.remove('fade-out');
            }, 150);
        });
    })
});