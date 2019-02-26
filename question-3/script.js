/**@name getAttributes
 * @description get the value of the href, hreflang, rel, target, and type attributes
 * @author (Mohd Hassaan)
 * @date 2019-02-26
 */
function getAttributes() {
    const domEl = document.getElementById("w3r");
    const { href, hreflang, rel, target, type } = domEl;
    console.log(`href: ${href}`);
    console.log(`hreflang: ${hreflang}`);
    console.log(`rel: ${rel}`);
    console.log(`target: ${target}`);
    console.log(`type: ${type}\n`);
}