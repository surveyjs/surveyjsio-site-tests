import { examplesURL as url } from '../helper';

export const normalizePlatform = (platform: string): string => {
  const p = platform.toLowerCase();
  if (p === 'knockoutjs' || p === 'knockout') return 'reactjs';
  if (p === 'vue') return 'vuejs';
  return p;
};

export const mapLibraryId = (id: string): string => {
  if (id === 'questiontype-text') return 'text-entry-question';
  return id;
};

export const libraryUrl = (id: string, platform: string): string =>
  `${url}/form-library/examples/${mapLibraryId(id)}/${normalizePlatform(platform)}`;

export const surveyCreatorUrl = (id: string, platform: string): string =>
  `${url}/survey-creator/examples/${id}/${normalizePlatform(platform)}`;

export const pdfExportUrl = (id: string): string =>
  `${url}/pdf-generator/examples/${id}`;

export const analyticsUrl = (id: string, platform: string): string =>
  `${url}/dashboard/examples/${id}/${normalizePlatform(platform)}`;

