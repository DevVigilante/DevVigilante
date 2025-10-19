import timelineCss from "./Timeline.module.css"

export default function Timeline({children}) {
  return (
    <div className={timelineCss.timeline}>
      {children}
    </div>
  );
}