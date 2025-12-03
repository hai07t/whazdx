const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

if (
  userTimeZone === "Asia/Ho_Chi_Minh" || 
  userTimeZone === "Asia/Saigon"
) {
    window.location.href = "https://www.lwhfu.com/vn/register/?utm_source=Android&utm_medium=download&utm_campaign=slot&utm_id=397364";
} else if (userTimeZone === "Asia/Bangkok") {
    window.location.href = "https://www.fun108club.com/th/register/?utm_source=Android&utm_medium=app-download&utm_campaign=signup&utm_id=411451";
}
