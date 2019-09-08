export const faceOverrides = [
  { name: 'Face Gaunt-Plump', id: 'faceGauntPlump' },
  { name: 'Cheek Size', id: 'cheekSize' },
  { name: 'Lower Face Width', id: 'lowerFaceWidth' },
  { name: 'Upper Face Width', id: 'upperFaceWidth' },
  { name: 'Underneck Up-Down', id: 'underneckUpDown' },
  { name: 'Cheekbone Fwd-Back', id: 'cheekboneFwdBack' },
  { name: 'Cheekbone Size', id: 'cheekboneSize' },
  { name: 'Cheekbone Up-Down', id: 'cheekboneUpDown' },
  { name: 'Ear Size', id: 'earSize' },
];

export const browOverrides = [
  { name: 'Brow Thickness', id: 'browThickness' },
  { name: 'Brow Up-Down', id: 'browUpDown' },
  { name: 'Brow Arch', id: 'browArch' },
  { name: 'Brow Rotate', id: 'browRotate' },
  { name: 'Brow Orbit Shape', id: 'browOrbitShape' },
  { name: 'Forehead In-Out', id: 'foreheadInOut' },
  { name: 'Brow In-Out', id: 'browInOut' }
];

export const eyeOverrides = [
  { name: 'Eye Size', id: 'eyeSize' },
  { name: 'Eye Width', id: 'eyeWidth' },
  { name: 'Outer Eye Down-Up', id: 'outerEyeDownUp' },
  { name: 'Eye Closeness', id: 'eyeCloseness' },
  { name: 'Eyes Up-Down', id: 'eyesUpDown' },
  { name: 'Eye Deepness', id: 'eyeDeepness' },
  { name: 'Eyelash Size', id: 'eyelashSize' },
  { name: 'Eyes Rotate', id: 'eyesRotate' },
];

export const noseOverrides = [
  { name: 'Nose Size', id: 'noseSize' },
  { name: 'Nose Width', id: 'noseWidth' },
  { name: 'Nostril Width', id: 'nostrilWidth' },
  { name: 'Nose Length', id: 'noseLength' },
  { name: 'Nose Up-Down', id: 'noseUpDown' },
  { name: 'Nose Turned Up-Down', id: 'noseTurnedUpDown' },
  { name: 'Nose Tip Up-Down', id: 'noseTipUpDown' },
  { name: 'Nose Tip Turn', id: 'noseTipTurn' },
  { name: 'Bridge Curve', id: 'bridgeCurve' },
  { name: 'Bridge In-Out', id: 'bridgeInOut' },
  { name: 'Bridge Width', id: 'bridgeWidth' },
  { name: 'Nose In-Out', id: 'noseInOut' },
];

export const mouthOverrides = [
  { name: 'Mouth Width', id: 'mouthWidth' },
  { name: 'Mouth Up-Down', id: 'mouthUpDown' },
  { name: 'Mouth Corner Down-Up', id: 'mouthCornerDownUp' },
  { name: 'Lips Thickness', id: 'lipsThickness' },
  { name: 'Upper Lip Pinch', id: 'upperLipPinch' },
  { name: 'Lower Lip Pinch', id: 'lowerLipPinch' },
  { name: 'Upper Lip Thickness', id: 'upperLipThickness' },
  { name: 'Lower Lip Thickness', id: 'lowerLipThickness' },
  { name: 'Mouth Corner Fwd-Back', id: 'mouthCornerFwdBack' },
  { name: 'Mouth In-Out', id: 'mouthInOut' },
];

export const jawOverrides = [
  { name: 'Chin Up-Down', id: 'chinUpDown' },
  { name: 'Chin In-Out', id: 'chinInOut' },
  { name: 'Chin Point', id: 'chinPoint' },
  { name: 'Jaw In-Out', id: 'jawInOut' },
  { name: 'Jaw Square-Angled', id: 'jawSquareAngled' },
  { name: 'Jaw Width', id: 'jawWidth' },
  { name: 'Jaw Taper', id: 'jawTaper' },
];

export const modifierTabs = [
  { id: 'face', name: 'Face', overrides: faceOverrides },
  { id: 'brow', name: 'Brow', overrides: browOverrides },
  { id: 'eyes', name: 'Eyes', overrides: eyeOverrides },
  { id: 'nose', name: 'Nose', overrides: noseOverrides },
  { id: 'mouth', name: 'Mouth', overrides: mouthOverrides },
  { id: 'jaw', name: 'Jaw', overrides: jawOverrides },
];
