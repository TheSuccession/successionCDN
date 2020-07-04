let fileTree = {
    dir: {
        images: {
            "SuccessionBackground.png": "url"
        },
        minecraft: {
            resourcepacks: {
                "Custom Playermodels": {
                    assets: {
                        "pack.mcmeta": "url",
                        minecraft: {
                            models: {
                                item: {
                                    "lead.json": "url"
                                },
                                players: {
                                    castleplayers: {
                                        "gardener.json": "url",
                                        "gatekeeper.json": "url",
                                        "grannygravels.json": "url",
                                        "guard.json": "url",
                                        "jackal.json": "url",
                                        "meetroom.json": "url",
                                        "minemaster836.json": "url"
                                    },
                                    "bartender.json": "url",
                                    "essentuan.json": "url"
                                }
                            },
                            textures: {
                                castleplayers: {
                                    "gardener.png": "url",
                                    "gatekeeper.png": "url",
                                    "grannygravels.png": "url",
                                    "guard.png": "url",
                                    "jackal.png": "url",
                                    "meetroom.png": "url",
                                    "minemaster836.png": "url",
                                },
                                "bartender.png": "url",
                                "essentuan.png": "url"
                            }    
                        },
                    },
                },
                "Custom Playermodels.zip": "url"
            },
        },
    },
    curFile: "",
    getCurrentFile: function(type="object") { 
        switch (type) {
            case "object":
                if (this.curFile == "") {
                    return this.dir
                } else {
                    let currentDir = this.dir;
                    let fileArray = this.curFile.split("./")
                    for (i in fileArray) {
                        currentDir = currentDir[fileArray[i]]
                    } 
                    return currentDir
                }
                break;
        }
    },
    goTo: function(file) {
        let currentDir = this.getCurrentFile("object")
        if (currentDir[file] != undefined) {
            switch (this.curFile) {
                case "":
                    this.curFile+= file
                    break;
                default: 
                    this.curFile+= "./" + file
                    break;
            }
        } else {
            console.warn("Cannot go to " + file + " because file doesn't exist.")
        }
    },
    back: function() {
        let fileArray = this.curFile.split("./")
        fileArray.pop()
        this.curFile = fileArray.join("./")
    }
}