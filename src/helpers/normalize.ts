import { Dimensions, PixelRatio } from 'react-native'
import { useAppState } from '../state/App/AppSelectors'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

const scale = SCREEN_WIDTH / 375

const normalize = (size: number) => {
    const newSize = size * scale
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

export default normalize



