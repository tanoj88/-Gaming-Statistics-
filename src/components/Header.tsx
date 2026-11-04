import React, { useState } from 'react';
import {
  Gamepad2,
  RotateCcw,
  Download,
  Sparkles,
  Filter,
  Volume2,
  VolumeX,
  Scan,
  Crosshair,
  Activity,
  Terminal,
} from 'lucide-react';
import { FilterState } from '../types/gaming';
import {
  isHudSoundEnabled,
  setHudSoundEnabled,
  playHudClick,
  playHudSelect,
  playHudConfirm,
} from '../utils/hudSound';

interface HeaderProps {
  filters: FilterState;
  onResetFilters: () => void;
  onExportCsv: () => void;
  onExportJson: () => void;
  totalFilteredPlayers: number;
  totalFilteredMatches: number;
  scanlinesEnabled: boolean;
  onToggleScanlines: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  filters,
  onResetFilters,
  onExportCsv,
  onExportJson,
  totalFilteredPlayers,
  totalFilteredMatches,
  scanlinesEnabled,
  onToggleScanlines,
}) => {
  const [soundOn, setSoundOn] = useState(isHudSoundEnabled());

  const handleToggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setHudSoundEnabled(next);
    if (next) playHudSelect();
  };

  const isFiltered =
    filters.game !== 'All' ||
    filters.role !== 'All' ||
    filters.map !== 'All' ||
    filters.dateRange !== 'all' ||
    filters.tier !== 'All' ||
    filters.searchQuery !== '';

  return (
    <header className="border-b border-cyan-500/30 bg-[#050914]/90 backdrop-blur-md sticky top-0 z-30 shadow-[0_4px_25px_-5px_rgba(6,182,212,0.15)]">
      {/* Top Tron Glowing Cyber Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#22d3ee]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Brand & Tactical HUD Title */}
          <div className="flex items-start gap-3.5">
            <div className="relative p-2.5 rounded-lg bg-slate-950 border border-cyan-500/50 text-cyan-400 shrink-0 hud-glow-cyan">
              <Crosshair className="w-6 h-6 animate-spin-slow text-cyan-400" />
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-cyan-300" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-cyan-300" />
            </div>

            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-2xs font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 tracking-wider">
                  COMBAT_HUD // V2.4
                </span>
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase text-glow-cyan">
                  Gaming Statistics &amp; Player Performance Dashboard
                </h1>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-mono mt-0.5 flex items-center gap-2 flex-wrap">
                <span className="text-cyan-400">&gt;</span>
                <span>Esports Telemetry &amp; Multi-Dimensional Player Analytics Terminal</span>
                <span className="text-slate-500">|</span>
                <span className="text-purple-400 font-semibold">PBL Data Visualization</span>
              </p>
            </div>
          </div>

          {/* HUD Action Controls */}
          <div className="flex items-center gap-2 flex-wrap shrink-0">
            {/* Audio SFX Toggle */}
            <button
              onClick={handleToggleSound}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono rounded border transition-all ${
                soundOn
                  ? 'bg-cyan-950/70 border-cyan-500/50 text-cyan-300 hud-glow-cyan'
                  : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
              }`}
              title="Toggle HUD sound effects"
            >
              {soundOn ? <Volume2 className="w-3.5 h-3.5 text-cyan-400" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">HUD SFX</span>
            </button>

            {/* Scanlines Toggle */}
            <button
              onClick={() => {
                playHudClick(900);
                onToggleScanlines();
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono rounded border transition-all ${
                scanlinesEnabled
                  ? 'bg-purple-950/70 border-purple-500/50 text-purple-300 hud-glow-purple'
                  : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
              }`}
              title="Toggle Tron CRT scanlines overlay"
            >
              <Scan className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Scanlines</span>
            </button>

            {/* Reset Filters */}
            {isFiltered && (
              <button
                onClick={() => {
                  playHudSelect();
                  onResetFilters();
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-amber-300 bg-amber-500/10 border border-amber-500/40 rounded hover:bg-amber-500/20 transition-all hud-glow-amber"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}

            {/* Export CSV */}
            <button
              onClick={() => {
                playHudConfirm();
                onExportCsv();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-slate-200 bg-slate-900 border border-slate-700 rounded hover:border-cyan-500/50 hover:text-cyan-300 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>CSV</span>
            </button>

            {/* Export JSON */}
            <button
              onClick={() => {
                playHudConfirm();
                onExportJson();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-cyan-300 bg-cyan-950/70 border border-cyan-500/60 rounded hover:bg-cyan-900/60 transition-all hud-glow-cyan"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Export JSON</span>
            </button>
          </div>
        </div>

        {/* HUD Sub-Bar with Live Telemetry Gauges */}
        <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 flex-wrap gap-2 font-mono">
          <div className="flex items-center gap-3">
            <span className="text-cyan-400 font-bold flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              ACTIVE RADAR SLICE:
            </span>
            <span className="text-white font-bold tabular-nums">
              [{totalFilteredPlayers} PLAYERS]
            </span>
            <span className="text-slate-600">//</span>
            <span className="text-purple-400 font-bold tabular-nums">
              [{totalFilteredMatches} COMBAT MATCHES]
            </span>
          </div>

          <div className="flex items-center gap-3 text-2xs text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
              ENGINE: LOCAL_DSP
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-cyan-300">DATASET: 300 PROFILES / 2,000 LOGS</span>
          </div>
        </div>
      </div>
    </header>
  );
};
