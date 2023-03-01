import { Appearance } from 'react-native';

const isDarkMode = Appearance.getColorScheme() === 'dark';

const fontConstants = {
    familyRegular : 'sans-serif',
    sizeTextSmall : 9,
    sizeTextMedium : 18,
    sizeTextBig : 25,
    headingBig : 29,
    headingMedium : 24,
    headingSmall : 19, 
    textSmall : 15, 
    weightBold : 'bold',
    smallWeight : '300',
    mediumWeight : '500',
    BigWeight : '700'
}

const colorConstants = {
    background : isDarkMode ? '#333333' : '#295791',
    backgroundMedium : isDarkMode ? '#666666' : '#6b95ff',
    backgroundLight : isDarkMode ? '#444444' : '#a4c1fa',
    fontColor : isDarkMode ? '#eeeeee' : '#ecfbfa'
}

const sizeConstants = {
    paddingSmall : 2,
    paddingRegular : 8,
    paddngLarge : 16,
    borderRadius : 18,
    wordsContainer : ''
}

const spaceConstants = {
    smallSpaceHorizontal : 5,
    mediumSpacHorizontal : 10,
    LargeSpaceHorizontal : 15,

    smallSpaceVertical : 5,
    mediumSpacVertical : 10,
    LargeSpaceVertical : 15,

}

export { fontConstants, colorConstants, sizeConstants, spaceConstants }

