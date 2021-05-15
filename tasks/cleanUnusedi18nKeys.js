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
    const textResources = await workspace.byGlob("**/*{view.xml,fragment.xml,controller.js,manifest.json}");
    const i18nFiles = await workspace.byGlob("**/*.properties");
    var lines = [], line = {}, i18nString = "";

    await Promise.all(i18nFiles.map(async (i18nFile) => {
        // var i18nFile = i18nFiles[i];

        let i18nFileString = await i18nFile.getString();

        var i18nLines = i18nFileString.split(/\r?\n/);

        for (let i = 0; i < i18nLines.length; i++) {
            line = {};
            const i18nLine = i18nLines[i];

            var keyValue = i18nLine.split("=");
            if (!keyValue || keyValue.length < 2) {
                continue;
            }
            line.key = keyValue[0].trim();
            line.value = keyValue[1].trim();
            lines.push(line);
        }

        var found = false;

        for (var k = 0; k < lines.length; k++) {
            found = false;
            for (let i = 0; i < textResources.length; i++) {
                var textResource = textResources[i];
                let text = await textResource.getString();
                line = lines[k];
                var searchReturn = text.search(line.key)
                if (searchReturn !== -1) {
                    found = true;
                    break;
                }
            }
            lines[k].found = found;
        }

        lines = lines.filter((l) => l.found === true)

        for (let i = 0; i < lines.length; i++) {
            line = lines[i];
            i18nString += line.key + " = " + line.value + "\n";
        }
        i18nString.substring(0, i18nString.length - 2);

        await i18nFile.setString(i18nString)

        await i18nFile.getString(i18nString).then((text) => console.log(text));

        await workspace.write(i18nFile).then(() => console.log('cleanUnusedi18nKeys task Finished'));

        // Optional with FS
        // var realPath = "C:\\Users\\YunusTuzun\\My Folders\\Software Project Workspaces\\Sap\\UI5 i18n Cleaner\\webapp\\i18n\\i18n.properties";
        // var path = i18nFile.getPath(); 
        // var longPath = i18nFile._project.path + "\\" + i18nFile._project.resources.pathMappings["/"]; // C:\\Users\\YunusTuzun\\My Folders\\Software Project Workspaces\\Sap\\UI5 i18n Cleaner
        // var fromIndex = path.indexOf(i18nFile._project.metadata.namespace) + i18nFile._project.metadata.namespace.length 
        // var realPath = path.substring(fromIndex, path.length);
        // realPath = realPath.split("/").join("\\")
        // fs.writeFileSync(longPath +  realPath, i18nString, 'utf8');
    }
    ));

};