import timelineItemCss from "./TimelineItem.module.css"

export default function TimelineItem({title, time, children}) {
  return (
    <div className={timelineItemCss.timeline_item}>
      <span className={timelineItemCss.timeline_date}>{time}</span>
      <div className={timelineItemCss.timeline_content}>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
}
