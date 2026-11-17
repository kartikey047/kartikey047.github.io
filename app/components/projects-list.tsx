"use client";

import Image from "next/image";
import { useState } from "react";
import { EmailLink } from "./email-link";

type Project = {
  title: string;
  visual: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageFit?: "contain";
  animation?: string;
  href?: string;
  description?: string;
  imageCredit?: { label: string; href: string };
};

const projects: Project[] = [
  { title: "Sparse Conditioning for Efficient Structural Control in Diffusion Models", visual: "07", image: "/projects/sparse-conditioning-preview.png", imageWidth: 448, imageHeight: 448, animation: "/projects/sparse-conditioning.gif", href: "https://github.com/kartikey047/Sparse-ControlNet", description: "We observe that generated image structure in Diffusion models is largely determined by early denoising steps and low-frequency noise. Using this insight, we sparsify ControlNet calls during image generation to reduce conditioning overhead by 70% while preserving structural fidelity of full ControlNet conditioning." },
  { title: "VLM-Guided Autonomous Navigation", visual: "01", image: "/projects/vlm-guided-autonomous-navigation.png", imageWidth: 619, imageHeight: 601, href: "https://github.com/ansh1113/gem_vlm_navigation", description: "Developed natural-language control for GEM e2 vehicle using GPT-4o as a high-level planner. Integrated camera and LiDAR perception for obstacle detection, implementing a DWA controller for safe, obstacle-aware trajectory execution." },
  { title: "Autonomous Parallel Parking System", visual: "02", image: "/projects/autonomous-parallel-parking-system.png", imageWidth: 528, imageHeight: 394, href: "https://github.com/kartikey047/GEM-ParallelPark", description: "Built end-to-end perception-planning-control pipeline for parallel parking, using object detection and bird's-eye-view transformations to estimate parking spaces dimensions and plan collision-free trajectories." },
  { title: "KV Caching for Autoregressive Video Diffusion", visual: "11", image: "/projects/kv-caching-autoregressive-video-diffusion.png", imageWidth: 1392, imageHeight: 384, imageFit: "contain", href: "https://github.com/kartikey047/kv-ar-caching", imageCredit: { label: "Ca²-VDM (ICML 2025)", href: "https://proceedings.mlr.press/v267/gao25m.html" }, description: "Implemented KV caching for a toy autoregressive video diffusion model, reusing attention keys and values across generated frames. Eliminated redundant attention computation to improve temporal attention complexity from O(N²) to O(N), yielding a wall-clock speedup of 30x in long-horizon video generation." },
  { title: "Parallel Lossless File Compression", visual: "13", image: "/projects/parallel-lossless-file-compression.png", imageWidth: 1370, imageHeight: 940, href: "https://github.com/kartikey047/parallel-compressor", description: "Developed CUDA-accelerated RLE compression using parallel scan-based algorithms, achieving 95% higher GPU throughput and 250% higher CPU throughput with 4 threads versus single-threaded baselines." },
  { title: "Unix Shell", visual: "03", image: "/projects/tux.png", imageWidth: 1280, imageHeight: 1518, imageFit: "contain", description: "Built a Unix shell in C, supporting command execution, pipelines, I/O redirection, and background processes. Implemented process management, inter-process communication, and Nano-style interactive terminal editing." },
  { title: "Networked File System", visual: "14", image: "/projects/tux.png", imageWidth: 1280, imageHeight: 1518, imageFit: "contain", description: "Built a scalable networked file system in C, supporting remote file operations and concurrent client requests over TCP. Leveraged epoll-based event-driven I/O for efficient connection management and high-concurrency request handling." },
  { title: "Nature Notebook", visual: "16", image: "/projects/nature-notebook.png", imageWidth: 1600, imageHeight: 1067, href: "https://github.com/CS222-UIUC/Team-61-Nature-Notebook", description: "A bird-watching web app that uses React and Firebase to record bird sightings. A machine learning-based bird classifier and cloud-backed storage make observations persistent and automatically categorized." },
];

export function ProjectsList() {
  const [activeAnimation, setActiveAnimation] = useState<string | null>(null);

  return (
    <>
      <p className="project-note">Code for some projects is not available in order to uphold academic integrity standards. Please <EmailLink className="inline-reference">contact me</EmailLink> if you&apos;d like to know more about these projects.</p>
      <div className="barron-list">
        {projects.map((project) => (
          <article className="barron-entry barron-project" key={project.title}>
            <div className={`barron-thumbnail barron-thumbnail--project${project.imageFit === "contain" ? " barron-thumbnail--transparent" : ""}`} aria-hidden="true" onMouseEnter={() => project.animation && setActiveAnimation(project.title)} onMouseLeave={() => setActiveAnimation(null)}>
              {project.image ? <Image className={`project-thumbnail-image${project.imageFit === "contain" ? " project-thumbnail-image--contain" : ""}`} src={project.animation && activeAnimation === project.title ? project.animation : project.image} alt="" width={project.imageWidth ?? 619} height={project.imageHeight ?? 601} unoptimized /> : <span>{project.visual}</span>}
            </div>
            <div className="barron-entry-copy">
              <h3>{project.title}</h3>
              {project.description && <p>{project.description}</p>}
              {project.imageCredit && <p className="barron-credit">Figure from <a href={project.imageCredit.href} target="_blank" rel="noreferrer">{project.imageCredit.label}</a></p>}
              {project.href && <p className="barron-links"><a href={project.href} target="_blank" rel="noreferrer">GitHub</a></p>}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
