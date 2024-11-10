
export function generateRandomId() {
    const randomId = Math.random().toString(36).substr(2, 10);
    const timestamp = Date.now().toString(36).substr(2, 5);
    return randomId + timestamp;
  }
  
export function formatDate(date) {
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
      
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
    return `${day} ${monthNames[monthIndex]} ${year}`;
}

export function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    minutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero for minutes < 10
    let formattedTime = `${hours}:${minutes} ${ampm}`;
    return formattedTime;
  }

  export const storeDataInLocalStorage = (list) => {
    const inActiveAllTheFields = list.map((item) => ({ ...item, isActive: false }))
    localStorage.setItem('notes-list', JSON.stringify(inActiveAllTheFields));
  }