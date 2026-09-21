'use client';
export default function Error({reset}:{reset:()=>void}){return <main id="main" className="wrap section page-heading"><h1>تعذّر عرض الصفحة.</h1><p>حاول مرة ثانية، أو تواصل معنا على 052 915 1179.</p><button className="button" onClick={reset}>إعادة المحاولة</button></main>}
