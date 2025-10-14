import { getConfig } from "../common/config";
import { PerformanceResourceType, resourceType } from "../types";
import { TraceTypeEnum, TraceSubTypeEnum } from "../common/enmu";
import { lazyReportBatch } from "../common/report";


export default function observerEntries() {
    if(document.readyState === 'complete') {
        observerEvent()
    } else {
        const onLoad = () => {
            observerEvent()
            window.removeEventListener('load', onLoad)
        }
        window.addEventListener('load', onLoad)
    }
}

export function observerEvent() {
   const config = getConfig();
   const url = config.url;
   const parseUrl = new URL(url);
   const host = parseUrl.host;

   const entryHandler = (list: PerformanceObserverEntryList) => {
    const 
   }
}