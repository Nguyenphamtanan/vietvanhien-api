import { Router } from 'express';
import {
  createResource,
  deleteResource,
  getDashboard,
  listContacts,
  listResource,
  updateContact,
  updateResource,
  updateSite
} from '../controllers/adminController.js';
import { requireAdmin } from '../middleware/auth.js';
import upload from '../middleware/upload.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = Router();

router.use(asyncHandler(requireAdmin));

router.get('/dashboard', asyncHandler(getDashboard));
router.put('/site', asyncHandler(updateSite));

router.get('/projects', asyncHandler(listResource('projects')));
router.post('/projects', upload.single('image'), asyncHandler(createResource('projects')));
router.put('/projects/:id', upload.single('image'), asyncHandler(updateResource('projects')));
router.delete('/projects/:id', asyncHandler(deleteResource('projects')));

router.get('/news-events', asyncHandler(listResource('newsEvents')));
router.post('/news-events', upload.single('image'), asyncHandler(createResource('newsEvents')));
router.put('/news-events/:id', upload.single('image'), asyncHandler(updateResource('newsEvents')));
router.delete('/news-events/:id', asyncHandler(deleteResource('newsEvents')));

router.get('/partners', asyncHandler(listResource('partners')));
router.post('/partners', upload.single('image'), asyncHandler(createResource('partners')));
router.put('/partners/:id', upload.single('image'), asyncHandler(updateResource('partners')));
router.delete('/partners/:id', asyncHandler(deleteResource('partners')));

router.get('/contacts', asyncHandler(listContacts));
router.put('/contacts/:id', asyncHandler(updateContact));

export default router;
