const StartFunc = (row, $element, field) => {
    if (field === "Alter") {
        const url = new URL(window.location.href);
        const params1 = new URLSearchParams(url.search);
        let NewURl = new URL(`./${jVarGlobalTableName}AlterSSR.html`, url);
        const new_url = new URL(`${NewURl.href}?${params1}`);
        new_url.searchParams.append('inRowPk', row.pk);

        window.location.href = new_url.href;
    };
};
export { StartFunc };