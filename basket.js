const basketChunkDivScriptCreater = (itemName, itemCount) => `
    <div class="chunk-container | flex flex-row justify-evenly items-center | h-[60px] w-[600px]">
        <div class="item-name | font-semibold text-[24px]">${itemName}</div>
        <div class="item-count | font-normal text-[36px] italic">${itemCount}</div>
    </div>
`;

const dataKeys = Object.keys(localStorage);
dataKeys.forEach((key) => {
    const htmlScript = basketChunkDivScriptCreater(key.toString(), localStorage.getItem(key).toString);
    document.body.innerHTML += htmlScript; 
});