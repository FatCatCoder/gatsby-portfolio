export default function formatDate(recentDate){
    const periods = {
        month: (30 * 24 * 60 * 60 * 1000),
        week: (7 * 24 * 60 * 60 * 1000),
        day: (24 * 60 * 60 * 1000),
        hour: (60 * 60 * 1000),
        minute: (60 * 1000)
    };

    const diff = Date.now() - Date.parse(recentDate);
    
    if (diff > periods.month) {
        const time = Math.floor((diff / periods.month));
        return time === 1? time + " Month Ago": time + " Months Ago";
    } 
    else if (diff > periods.week) {
        const time = Math.floor((diff / periods.week));
        return time === 1? time + " Week Ago": time + " Weeks Ago";
    } 
    else if (diff > periods.day) {
        const time = Math.floor((diff / periods.day));
        return time === 1? time + " Day Ago": time + " Days Ago";
    } 
    else if (diff > periods.hour) {
        const time = Math.floor((diff / periods.hour));
        return time === 1? time + " Hour Ago": time + " Hours Ago";
    } 
    else if (diff > periods.minute) {
        const time = Math.floor((diff / periods.minute));
        return time === 1? time + " Minute Ago": time + " Minutes Ago";
    }

    return "Just now";
  }
