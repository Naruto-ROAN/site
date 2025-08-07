import VAR from './var.js';
const COLORS = {
    light_lavender: '#C0A8E0',
    pastel_lavender: '#9A7FD6',
    lavender: '#785AB8',
    dark_lavender: '#553D8C',
    deep_lavender: '#3A2A60'
}

document.addEventListener('DOMContentLoaded', function() {
    const menuButtons = document.querySelectorAll('.menuButton');
    const roleButtons = document.querySelectorAll('.role');

    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;
            const content = document.getElementById('content');
            const rolesGrid = document.getElementById('grid');
            let gridStatus = false;
            let text = '';
            content.classList.add('fade-out');
            
            switch (buttonText) {
                case 'Главная':
                    text = VAR.MENU_TEXT.MAIN;
                    break;
                case 'Сюжет':
                    text = VAR.MENU_TEXT.LORE;
                    break;
                case 'Правила':
                    text = VAR.MENU_TEXT.RULES;
                    break;
                case 'Роли':
                    text = VAR.MENU_TEXT.ROLES;
                    gridStatus = true;
                    break;
                case 'Регистрация':
                    text = VAR.MENU_TEXT.SIGNUP;
                    break;
                case 'Статьи':
                    text = VAR.MENU_TEXT.ARTICLES;
                    break;
                default:
            }

                    
            gridStatus ? rolesGrid.classList.remove('hidden') : rolesGrid.classList.add('hidden');

            setTimeout(() => {
                content.innerHTML = text;
                content.classList.remove('fade-out');
            }, 150);
        });
    });

    const buttonStatuses = new Map();
    roleButtons.forEach(button => {
        buttonStatuses.set(button.id, false);

        button.addEventListener('click', () => {
            const roleText = button.textContent;
            const roleId = button.id;
            const roleHTML = button.innerHTML;
            let discriptionFontSize = screen.width <= 767 ? '9px' : 'medium';
            let roleFontSize = screen.width > 767 ? 'x-large' : 'medium'
            let text = '';

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
            } else {
                buttonStatuses.set(roleId, roleHTML);

                button.classList.add('fade-out');
                console.log(123);
                switch (roleText) {
                    case 'ХаширамаСенджу':
                        text = VAR.ROLE_DESCRIPTIONS.HASHIRAMA;
                        break;
                    case 'МадараУчиха':
                        text = VAR.ROLE_DESCRIPTIONS.MADARA;
                        break;
                    case 'Муу':
                        text = VAR.ROLE_DESCRIPTIONS.MUU;
                        break;
                    case 'ТобирамаСенджу':
                        text = VAR.ROLE_DESCRIPTIONS.TOBIRAMA;
                        break;
                    case 'ГенгецуХозуки':
                        text = VAR.ROLE_DESCRIPTIONS.GENGETSU;
                        break;
                    default:
                        text = 'Описание роли не найдено.';
                }
    
                setTimeout(() => {
                    button.innerHTML = text;
                    button.style.fontSize = discriptionFontSize;
                    button.style.textAlign = 'justify';
                    button.classList.remove('fade-out');
                }, 150);
            };
            
        });
    })

    const vkButton = document.querySelector('.vkButton');
    if (vkButton) {
        vkButton.addEventListener('click', function() {
            window.open('https://vk.com/roan_role?from=groups', '_blank');
        });
    }
});