export class Button {
    id: number;
    width: number;
    height: number;
    label: string;
    tags: string[];
    collection: string;
    averageClicksPerDay: number;
    averageTimeToLeaveAfterClick: number;
    averageLoadTime: number;

    constructor({
        width,
        height,
        label,
        tags,
        collection,
        averageClicksPerDay,
        averageTimeToLeaveAfterClick,
        averageLoadTime
    }:{
        width?: number | string
        height?: number | string,
        label?: string,
        tags?: string,
        collection?: string,
        averageClicksPerDay?: number,
        averageTimeToLeaveAfterClick?: number,
        averageLoadTime?: number
    }){
        this.id = Math.floor(Math.random() * 1000000);
        if (!width)
            this.width = 100;
        else
            this.width = parseInt(width.toString());
        if (!height)
            this.height = 50;
        else
            this.height = parseInt(height.toString());
        this.label = label || 'Button';
        if (tags && tags.length > 0)
            this.tags = tags.split(',');
        else
            this.tags = [];
        this.collection = collection || 'default';
        this.averageClicksPerDay = this.generateClicksPerDay(averageClicksPerDay == 0 || averageClicksPerDay == undefined ? 1 : averageClicksPerDay);
        this.averageTimeToLeaveAfterClick = this.generateTimeToLeaveAfterClick(averageTimeToLeaveAfterClick == 0 || averageTimeToLeaveAfterClick == undefined ? 1 : averageTimeToLeaveAfterClick);
        this.averageLoadTime = this.generateAverageLoadTime(averageLoadTime == 0 || averageLoadTime == undefined ? 1 : averageLoadTime);
    }

    render(){
        console.log(`
            <button id="${this.id}" style="width: ${this.width}px; height: ${this.height}px;">
                ${this.label}
            </button>
        `);
    }

    generateClicksPerDay(level: number){
        return Math.floor(Math.random() * (10000 * level));
    }

    generateTimeToLeaveAfterClick(level: number){
        return Math.floor(Math.random() * (1000 * level));
    }

    generateAverageLoadTime(level: number){
        return Math.floor(Math.random() * (1000 * level));
    }

    toJSON(){
        return {
            id: this.id,
            width: this.width,
            height: this.height,
            label: this.label,
            tags: this.tags,
            collection: this.collection,
            averageClicksPerDay: this.averageClicksPerDay,
            averageTimeToLeaveAfterClick: this.averageTimeToLeaveAfterClick,
            averageLoadTime: this.averageLoadTime,
            type: 'button'
        };
    }
}