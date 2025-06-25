// ===================================================================
// 3. SEARCH ROUTING HANDLER COMPONENT
// src/components/SearchRoutingHandler.jsx
// ===================================================================

import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SearchRoutingManager } from '../utils/searchRouting';

const SearchRoutingHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only run on initial page load, not on subsequent navigation
    if (!window.hasProcessedInitialRoute) {
      const searchRouter = new SearchRoutingManager();
      
      const processRouting = async () => {
        try {
          const targetRoute = await searchRouter.analyzeAndRoute(navigate);
          if (targetRoute) {
            console.log(`🔄 Auto-routed from search: ${location.pathname} → ${targetRoute}`);
          }
        } catch (error) {
          console.warn('Search routing error:', error);
        }
      };
      
      // Small delay to ensure page is loaded
      setTimeout(processRouting, 100);
      window.hasProcessedInitialRoute = true;
    }
  }, [navigate, location.pathname]);

  return null;
};

export default SearchRoutingHandler;