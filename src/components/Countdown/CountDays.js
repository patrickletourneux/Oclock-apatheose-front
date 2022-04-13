export default function CountDays(start, end) {
  return Math.ceil(Math.abs(end - start) / (1000 * 60 * 60 * 24));
}
