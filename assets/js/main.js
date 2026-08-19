/* =========================================================
   핸즈로그 홈페이지 - 인터랙션 스크립트
   외부 라이브러리 없이 순수 JS로만 작성
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  /* --- 모바일 내비게이션 토글 --- */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    /* 링크 클릭 시 모바일 메뉴 자동 닫힘 */
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* --- FAQ 아코디언 (details/summary 네이티브 사용, 별도 JS 불필요) --- */
  /* 브라우저 기본 <details> 동작을 그대로 활용합니다. */
});
