import dayjs from "dayjs";

export default function formatTime(timeString: string): string {
  const currentDate = dayjs().toDate();
  const postDate = dayjs(timeString).toDate();
  const diff = currentDate.getTime() - postDate.getTime();
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  if (years) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }
  if (months) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }
  if (days) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }
  if (hours) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  }
  if (minutes) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  }
  return "just now";
}
