
export function getInitials(name) {
    let splitName = name.split(' ');
    let initials = '';

    for (let i = 0; i < splitName.length; i++) {
        initials += splitName[i][0]
    }

    return initials.toUpperCase(0);
}