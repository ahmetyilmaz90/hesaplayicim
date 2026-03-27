/*Footer tarih gösterme*/
export function initFooter() {
   const date = document.getElementById("date-site");
   if (date) {
      date.textContent = new Date().getFullYear();
   }
}
