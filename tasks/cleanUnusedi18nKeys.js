var fs = require('fs')
/**
 * Custom task example
 *
 * @param {object} parameters Parameters
 * @param {module:@ui5/fs.DuplexCollection} parameters.workspace DuplexCollection to read and write files
 * @param {module:@ui5/fs.AbstractReader} parameters.dependencies Reader or Collection to read dependency files
 * @param {object} parameters.taskUtil Specification Version dependent interface to a
 *                [TaskUtil]{@link module:@ui5/builder.tasks.TaskUtil} instance
 * @param {object} parameters.options Options
 * @param {string} parameters.options.projectName Project name
 * @param {string} [parameters.options.projectNamespace] Project namespace if available
 * @param {string} [parameters.options.configuration] Task configuration if given in ui5.yaml
 * @returns {Promise<undefined>} Promise resolving with <code>undefined</code> once data has been written
 */
module.exports = async function ({ workspace, dependencies, taskUtil, options }) {
    // [...]


    const textResources = await workspace.byGlob("**/*{view.xml,fragment.xml,controller.js,manifest.json}");
    const i18nFiles = await workspace.byGlob("**/*.properties");
    var lines = [], line = {}, i18nString = "";

    // for (var i = 0; i < i18nFiles.length; i++) {

    await Promise.all(i18nFiles.map(async (i18nFile) => {
        // var i18nFile = i18nFiles[i];

        let i18nFileString = await i18nFile.getString();

        var i18nLines = i18nFileString.split(/\r?\n/);

        for (let i = 0; i < i18nLines.length; i++) {
            line = {};
            const i18nLine = i18nLines[i];

            var keyValue = i18nLine.split("=");
            if (keyValue.length < 1) {
                continue;
            }
            line.key = keyValue[0];
            line.value = keyValue[1];
            lines.push(line);
        }


        for (let i = 0; i < textResources.length; i++) {
            var textResource = textResources[i];
            let text = await textResource.getString();
            for (var k = 0; k < lines.length; k++) {
                line = lines[k];
                var searchReturn = text.search(line.key)
                if (searchReturn !== -1) {
                    lines[k].found = true;
                }
            }
        }

        lines = lines.filter((l) => l.found === true)


        for (let i = 0; i < lines.length; i++) {
            line = lines[i];
            i18nString += line.key + " = " + line.value + "\n";
        }

        await i18nFile.setString(i18nString)

        await i18nFile.getString(i18nString).then((text) => console.log(text));

        await workspace.write(i18nFile, { readOnly: true }).then(() => console.log('DONE'));

    }
    ));

};