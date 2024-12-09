

const dummyApiResponse = {
    showLightAndDarkMode : true,
    showTicTacToeBoard : true,
    showRandomColorGenerator : false,
    showAccordian : true,
    showTreeView : true
}

function featureFlagsDataServiceCall () {
    return new Promise((resolve,reject) => {
        if (dummyApiResponse) setTimeout(resolve(dummyApiResponse),500);
        else reject("Some Error Occured! Please Try Again")
    })
}

export default featureFlagsDataServiceCall