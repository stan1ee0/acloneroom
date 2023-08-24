function Menu() {
  return (
    <div className="menu">
      <span className="customSelect">
        <span className="customSelectOptions">
          <ul>
            <li>language.</li>
            {Object.keys(langs).map(key =>
              <li key={key}>{langs[key]}</li>
            )}
          </ul>
        </span>  
      </span>
      <span>sound on.</span>
      <span className="appStore">get the app.</span>
      <span>lights off.</span>
      <span>hyper.</span>
      <span>restart.</span>
      <span>share.</span>
      <span>save.</span>
      <span>github.</span>
    </div>
  );
}

const langs = {
	'cs':'czech',
	'de':'deutsch',
	'el':'ελληνικά',
	'en':'english',
	'eo':'esperanto',
	'es':'español',
	'fr':'français',
	'gl':'galego',
	'id':'bahasa indonesia',
	'it':'italiano',
	'lv':'latviešu valoda',
	'ja':'日本語',
	'ko':'한국어',
	'nb':'norsk',
	'pl':'polski',
	'lt_LT':'lietuvių',
	'pt':'português',
	'pt_br':'português (brasil)',
	'ru':'русский',
	'sv':'svenska',
	'th':'ไทย',
	'tr':'türkçe',
	'uk':'українська',
	'vi':'tiếng việt',
	'zh_cn':'简体中文',
	'zh_tw':'繁體中文'
};
