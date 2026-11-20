interface Flow {
  label: string;
  steps: string[];
}

interface EngineeringNote {
  caption: string;
  flows: Flow[];
  tradeoff: string;
  takeaway: string;
}

// Used only by the static case-study renderer.
export const engineeringNotes: Partial<Record<string, EngineeringNote>> = {
  'ai-chat-widget': {
    caption: 'How a conversation moves between the page, the network, and the microphone',
    flows: [
      { label: 'Embed', steps: ['Host website', 'Embedded iframe', 'React chat app'] },
      { label: 'Configure', steps: ['React chat app', 'HTTP configuration API', 'Theme and language applied'] },
      { label: 'Receive a reply', steps: ['Conversation WebSocket', 'Incoming text chunks', 'Active reply in React'] },
      { label: 'Send voice', steps: ['Browser microphone', 'PCM audio worklet', 'Conversation WebSocket'] },
      { label: 'Play audio', steps: ['Incoming socket audio', 'Web Audio playback', 'Browser speakers'] },
      { label: 'Interrupt', steps: ['Microphone level', 'Calibrated speech threshold', 'Interrupt active playback'] },
    ],
    tradeoff: 'A microphone stays active while the assistant speaks so the visitor can interrupt. Measuring the ambient level gives the interruption check a local baseline, but room noise and microphone sensitivity still affect when it fires.',
    takeaway: 'Receiving audio and playing it are separate events. Interruption has to reach the browser playback state as well as the conversation interface.',
  },
  'ring-builder': {
    caption: 'How a product choice reaches the viewer and survives a change of screen',
    flows: [
      { label: 'Select', steps: ['Product configuration API', 'React selection controls', 'React Context journey state'] },
      { label: 'Render', steps: ['Selected product attributes', 'Match material labels', 'iJewel third-party viewer'] },
      { label: 'Resume', steps: ['Local or server-saved journey', 'Restore journey state', 'Populate controls and viewer'] },
      { label: 'Assist', steps: ['WebSocket chat events', 'Recommendations and design tasks', 'React chat interface'] },
    ],
    tradeoff: 'The catalogue and viewer use different names for material options. Normalizing labels lets the same control work across models. The integration still has to discover the material groups supplied by each model and reapply selections when the viewer refreshes.',
    takeaway: 'The saved product choice is the reference for both the controls and the viewer. That gives a returning shopper a configuration the frontend can reconstruct, even when the viewer initializes later.',
  },
  'brainstormer-creator-studio': {
    caption: 'How the Studio frontend tracks an agent from editing through publishing',
    flows: [
      { label: 'Configure', steps: ['Create or edit agent', 'Choose knowledge sources', 'Documents, website, or Instagram'] },
      { label: 'Transfer files', steps: ['Document upload queue', 'Sequential HTTP uploads', 'File transfer complete'] },
      { label: 'Track processing', steps: ['Firestore status update', 'Frontend status listener', 'Processing feedback in file list'] },
      { label: 'Publish', steps: ['Configured agent', 'Publishing controls', 'Published agent link'] },
      { label: 'Preview', steps: ['Current agent configuration', 'Embedded widget iframe', 'Interactive chat preview'] },
    ],
    tradeoff: 'Processing files one at a time makes queue progress and retries easier to follow. It also means a slow transfer delays the next upload. Firestore listeners can continue updating earlier files while the queue advances.',
    takeaway: 'An HTTP upload acknowledgement answers “Did the file arrive?” The processing listener answers “Is this source ready?” The frontend gives creators both signals.',
  },
};
