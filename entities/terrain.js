class Terrain {
    constructor(game, x, y, type) {

        // type will determine the starting x position on the spritesheet
        this.type = this.selectType(type);

        this.game = game;
        this.x = x;
        this.y = y;
        this.scale = 1;

        // track the midpoint of each terrain block for entity placement
        this.midX = params.blockSize/2 + this.x;
        this.midY = (params.blockSize*0.77)/2 + this.y;

        this.spritesheet = "./assets/spritesheet_nature-blocks.png";

    };

    /** A function to select the correct type to draw
     * Returns the x-pixel of the correct tile on the spritesheet **/
    selectType(type) {
        switch(type) {
            case "dirt":
                let rand = Math.round(Math.random());
                if (rand==0) return 6;
                else if (rand==1) return 425;
                else return 6;
                break;
            case "grass":
                let rand2 = Math.floor(Math.random() * (8) + 1);
                if (rand2==1) return 563;
                else if (rand2==2) return 703;
                else if (rand2==3) return 843;
                else if (rand2==4) return 983;
                else if (rand2==5) return 1123;
                else if (rand2==6) return 1263;
                else if (rand2==7) return 1543;
                else if (rand2==8) return 1684;
                else if (rand2==9) return 1823;
                else return 563;
                break;
            case "stone":
                let rand3 = Math.floor(Math.random() * (3) + 1);
                if (rand3==1) return 2100;
                else if (rand3==2) return 2238;
                else if (rand3==3) return 2376;
                else if (rand3==4) return 2514;
                else return 2238;
                break;
        }
    }

    draw(ctx) {
        ctx.drawImage(ASSET_MANAGER.getAsset(this.spritesheet), this.type, 0, params.blockSize, params.blockSize, this.x, this.y, params.blockSize, params.blockSize);
    }

    update() {

    };
};