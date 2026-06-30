import { Router } from 'express';
import {
  createContact,
  getNewsEvent,
  getNewsEvents,
  getPartners,
  getProject,
  getProjects,
  getSite
} from '../controllers/publicController.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = Router();

router.get('/site', asyncHandler(getSite));
router.get('/projects', asyncHandler(getProjects));
router.get('/projects/:id', asyncHandler(getProject));
router.get('/news-events', asyncHandler(getNewsEvents));
router.get('/news-events/:id', asyncHandler(getNewsEvent));
router.get('/partners', asyncHandler(getPartners));
router.post('/contacts', asyncHandler(createContact));

export default router;
