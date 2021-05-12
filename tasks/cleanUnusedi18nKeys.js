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




    // for (let k = 0; k < progNames.length; k++) {
    //     const progName = progNames[k];

    //     var realPath = "C:\\SapWebIde\\eclipse\\serverworkspace\\te\\telekom\\OrionContent\\" + progName + "\\i18n\\i18n.properties";
    //     var newPath = "C:\\SapWebIde\\eclipse\\serverworkspace\\te\\telekom\\OrionContent\\" + progName + "\\i18n\\i18n_newx.properties";


    //     try {
    //         var data = "";
    //         data = fs.readFileSync(realPath, "utf-8");

    //     } catch (error) {
    //         console.log(error);
    //         continue;
    //     }
    //     var foundedString = "";


    //     if (data === "") {
    //         continue;
    //     }
    //     var i18nLines = data.split(/\r?\n/);

    //     for (let i = 0; i < i18nLines.length; i++) {
    //         const i18nLine = i18nLines[i];

    //         var found = false;

    //         var elArray = i18nLine.split("=");
    //         if (elArray.length > 1) {

    //             var prop = elArray[0];

    //             for (let j = 0; j < fileArray.length; j++) {
    //                 var fileElement = fileArray[j];

    //                 fileElement = fileElement.replace("@@@@@", progName);

    //                 try {
    //                     data = fs.readFileSync(fileElement, "utf-8");

    //                     var searchReturn = data.search(prop)
    //                     if (searchReturn === -1) {

    //                         console.log("");
    //                     }
    //                     else {
    //                         foundedString += i18nLine + "\n";
    //                         break;
    //                     }
    //                 } catch (error) {
    //                     console.log(error)
    //                 }

    //             }

    //         }
    //     }

    //     fs.writeFileSync(realPath, foundedString, 'utf8');

    //     console.log(realPath, "updated");
    // }

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

        // console.log(i18nFile + " added");
        // await workspace.write(i18nFile);
        // });
    }


        // console.log();
        // console.log(resource + " fixed");
        // return workspace.write(resource);
        // }
    ));

};