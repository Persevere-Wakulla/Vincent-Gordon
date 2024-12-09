import { useState } from "react"; 

export const initialState = {
leftSection: {
    state: true,
    closeBtnRef: "leftSection",
    indicator: {
        componentValRef: "",
        color: "",
        btnState: false,
    },
    children: [
        { userInfo: true },
        { recommend: false },
    ],
},
userInfo: {
    state: true,
    closeBtnRef: "userInfo",
    sibling: 'recommend',
    parent: 'leftSection',
    action: 2,
    indicator: {
        componentValRef: "",
        color: "",
        btnState: true,
    },
    preference:{
        readRelpiesStart:true,
        suscribe:false
    }
},
recommend: {
    state: false,
    closeBtnRef: "recommend",
    sibling: 'userInfo',
    parent: 'leftSection',
    action: 1,
    indicator: {
        componentValRef: "",
        color: "",
        disabled: false,
        btnState: false,
    },
},
news: {
    state: true,
    closeBtnRef: "news",
    sibling: 'timeline',
    controls: {
        sideBar: false,
        window: {
            state: true,
            disabled: false,
        },
    },
    indicator: {
        componentValRef: "",
        color: "",
        btnState: false,
        dropDown: {
            menuState: false,
            feedOption: "",
        },
    },
},
timeline: {
    state: true,
    closeBtnRef: "timeline",
    sibling: 'news',
    controls: {
        sideBar: false,
        window: {
            state: true,
            disabled: false,
        },
    },
    indicator: {
        componentValRef: "",
        color: "",
        btnState: false,
        dropDown: {
            menuState: false,
        },
    },
},
buzz: {
    state:false,
    closeBtnRef:'buzz',
    contact:'message',
    parent:'rightSection',
    action:1,
    controls:{},
    indicator: {
        componentValRef: "",
        color: "",
        disabled:false,
        btnState: false,
    },
},
message: {
    state:false,
    closeBtnRef:'message',
    contact:'buzz',
    sibling:'schema',
    parent:'rightSection',
    action:1,
    controls:{},
    indicator: {
        componentValRef: "",
        color: "",
        disabled:false,
        btnState: false,
    },
},
schema: {
    state:true,
    owner:true,
    closeBtnRef:'schema',
    sibling:'message',
    parent:'rightSection',
    action:2,
    controls:{},
    indicator: {
        componentValRef: "",
        color: "",
        disabled:true,
        btnState: false,
    },
},
rightSection: {
    state: true,
    closeBtnRef: "rightSection",
    indicator: {
        componentValRef: "",
        color: "",
        btnState: false,
    },
    children: [
        { schema: true },
        { message: false },
        { buzz: false },
    ],
},
profileLayout: {
    default: false,
    sixComponent: false,
    sevenComponent: false,
    eightComponent: false,
    threeDComponent: false,
},
threadBeingViewed:{
    currentReplyPage:1
}
}
export default function useStateStore(state = initialState) {
	const [store, setStore] = useState({...state})
	
    return [{...state}, store,setStore]
}
