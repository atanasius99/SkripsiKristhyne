class Widget {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    render() {
        const widgetContainer = document.createElement('div');
        widgetContainer.className = 'widget';

        const widgetTitle = document.createElement('h2');
        widgetTitle.innerText = this.title;

        const widgetContent = document.createElement('p');
        widgetContent.innerText = this.content;

        widgetContainer.appendChild(widgetTitle);
        widgetContainer.appendChild(widgetContent);

        return widgetContainer;
    }

    updateContent(newContent) {
        this.content = newContent;
        // Logic to update the displayed content can be added here
    }
}

export default Widget;