function doGet(e) {
  // 1. 주소창 파라미터(?page=...)를 확인합니다. 없으면 'Menu'가 기본값입니다.
  let page = e.parameter.page;
  if (!page) {
    page = 'Menu';
  }

  try {
    // 2. HTML 템플릿을 만듭니다.
    const template = HtmlService.createTemplateFromFile(page);

    // 3. 웹 앱의 기본 주소(URL)를 HTML 파일들에게 변수로 전달합니다.
    // (이게 있어야 HTML에서 다시 메뉴로 돌아오는 링크를 걸 수 있습니다.)
    template.url = ScriptApp.getService().getUrl();

    // 4. 완성된 페이지를 브라우저에 표시합니다.
    return template.evaluate()
        .setTitle('My Three.js Projects') // 브라우저 탭 이름
        .addMetaTag('viewport', 'width=device-width, initial-scale=1') // 모바일 대응
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); // 보안 설정

  } catch (error) {
    // 5. 만약 없는 페이지를 요청하면 에러 메시지를 띄웁니다.
    return HtmlService.createHtmlOutput('<h2>페이지를 찾을 수 없습니다: ' + page + '</h2>');
  }
}