import successImage from './images/great-job-min.jpg';
import timeUpImage from './images/timeUp.jpg';

export type ResultProps = {
    nextStepHandler: () => void
    type: 'success' | 'timeup'
}

export const ImageSources = {
    success: successImage,
    timeup: timeUpImage
}