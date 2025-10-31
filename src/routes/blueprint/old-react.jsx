import { Link, User, Play, Download, Info } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import exampleImage from 'figma:asset/9c3e8136c6ba8d78023f8430bc4a8589805ce3ee.png';
import characterImage from 'figma:asset/33d6598aea8e82ed744e66e01e63c7eb02a061a5.png';

export default function App() {
	return (
		<div className="relative h-screen w-screen overflow-hidden bg-white">
			{/* Grid Background */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

			{/* SVG Layer for Technical Lines and Elements */}
			<svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
				<defs>
					{/* Arrow markers */}
					<marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
						<polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
					</marker>
					<marker
						id="arrowhead-reverse"
						markerWidth="10"
						markerHeight="10"
						refX="1"
						refY="3"
						orient="auto"
					>
						<polygon points="10 0, 0 3, 10 6" fill="#3b82f6" />
					</marker>

					{/* Animated dashed line */}
					<style>
						{`
              @keyframes dash {
                to { stroke-dashoffset: 0; }
              }
              .animated-line {
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                animation: dash 2s ease-in-out forwards;
              }
              .pulse-line {
                animation: pulse 2s ease-in-out infinite;
              }
              @keyframes pulse {
                0%, 100% { opacity: 0.6; }
                50% { opacity: 1; }
              }
              .fade-in {
                animation: fadeIn 1s ease-in forwards;
              }
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
            `}
					</style>
				</defs>

				{/* Main vertical axis */}
				<line
					x1="50%"
					y1="5%"
					x2="50%"
					y2="95%"
					stroke="#3b82f6"
					strokeWidth="2"
					className="animated-line"
				/>

				{/* Horizontal axis */}
				<line
					x1="5%"
					y1="50%"
					x2="95%"
					y2="50%"
					stroke="#3b82f6"
					strokeWidth="2"
					className="animated-line"
					style={{ animationDelay: '0.3s' }}
				/>

				{/* Top arrow */}
				<line
					x1="50%"
					y1="5%"
					x2="50%"
					y2="8%"
					stroke="#3b82f6"
					strokeWidth="2"
					markerEnd="url(#arrowhead-reverse)"
					className="pulse-line"
				/>

				{/* Bottom arrow */}
				<line
					x1="50%"
					y1="92%"
					x2="50%"
					y2="95%"
					stroke="#3b82f6"
					strokeWidth="2"
					markerEnd="url(#arrowhead)"
					className="pulse-line"
				/>

				{/* Connecting lines for operator box */}
				<line
					x1="50%"
					y1="33%"
					x2="50%"
					y2="38%"
					stroke="#3b82f6"
					strokeWidth="1.5"
					className="animated-line"
					style={{ animationDelay: '0.6s' }}
				/>

				{/* Dashed connector to image */}
				<line
					x1="50%"
					y1="42%"
					x2="65%"
					y2="42%"
					stroke="#3b82f6"
					strokeWidth="1"
					strokeDasharray="5,5"
					className="animated-line"
					style={{ animationDelay: '0.9s' }}
				/>

				<line
					x1="65%"
					y1="42%"
					x2="65%"
					y2="45%"
					stroke="#3b82f6"
					strokeWidth="1"
					strokeDasharray="5,5"
					className="animated-line"
					style={{ animationDelay: '0.9s' }}
				/>

				{/* Bottom circles with crosshairs */}
				<g className="fade-in" style={{ animationDelay: '1.2s' }}>
					{/* Left circle */}
					<circle cx="70%" cy="85%" r="30" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
					<line
						x1="70%"
						y1="calc(85% - 30px)"
						x2="70%"
						y2="calc(85% + 30px)"
						stroke="#3b82f6"
						strokeWidth="1.5"
					/>
					<line
						x1="calc(70% - 30px)"
						y1="85%"
						x2="calc(70% + 30px)"
						y2="85%"
						stroke="#3b82f6"
						strokeWidth="1.5"
					/>

					{/* Right circle */}
					<circle cx="85%" cy="85%" r="30" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
					<line
						x1="85%"
						y1="calc(85% - 30px)"
						x2="85%"
						y2="calc(85% + 30px)"
						stroke="#3b82f6"
						strokeWidth="1.5"
					/>
					<line
						x1="calc(85% - 30px)"
						y1="85%"
						x2="calc(85% + 30px)"
						y2="85%"
						stroke="#3b82f6"
						strokeWidth="1.5"
					/>
				</g>
			</svg>

			{/* Content Layer */}
			<div className="relative z-10 h-full w-full">
				{/* Top Left - MUEN Label */}
				<div className="absolute top-[18%] left-[5%] fade-in" style={{ animationDelay: '0.4s' }}>
					<div className="flex items-start gap-3">
						<div className="tracking-wider text-blue-600">
							<div className="text-2xl">T</div>
						</div>
						<div className="space-y-0.5 text-xs tracking-wider">
							<div>LE</div>
							<div>MUE</div>
							<div>N</div>
						</div>
					</div>
				</div>

				{/* Link Icon */}
				<div className="absolute top-[19%] left-[32%] fade-in" style={{ animationDelay: '0.5s' }}>
					<div className="flex h-12 w-12 items-center justify-center border-2 border-blue-600 bg-white">
						<Link className="h-6 w-6 text-blue-600" />
					</div>
				</div>

				{/* Top Right - GLANCE AT */}
				<div className="absolute top-[10%] right-[20%] fade-in" style={{ animationDelay: '0.6s' }}>
					<div className="flex items-center gap-2">
						<div className="h-1.5 w-1.5 bg-blue-600" />
						<span className="text-xs tracking-wider text-blue-600">GLANCE</span>
					</div>
				</div>

				<div className="absolute top-[16%] right-[25%] fade-in" style={{ animationDelay: '0.7s' }}>
					<span className="text-xs tracking-wider text-blue-600">AT</span>
				</div>

				{/* Center - Operator Badge */}
				<div
					className="absolute top-[33%] left-1/2 -translate-x-1/2 fade-in"
					style={{ animationDelay: '0.8s' }}
				>
					<div className="flex items-center gap-3 border-2 border-blue-600 bg-white px-6 py-3">
						<div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
							<User className="h-5 w-5 text-white" />
						</div>
						<div>
							<div className="text-xs text-gray-600">OPERATOR</div>
							<div className="tracking-wider">MT-ST-2</div>
						</div>
					</div>
				</div>

				{/* Image with corner brackets */}
				<div className="absolute top-[40%] right-[18%] fade-in" style={{ animationDelay: '1s' }}>
					<div className="relative">
						{/* Corner brackets */}
						<div className="absolute -top-2 -left-2 h-4 w-4 border-t-2 border-l-2 border-blue-600" />
						<div className="absolute -top-2 -right-2 h-4 w-4 border-t-2 border-r-2 border-blue-600" />
						<div className="absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-blue-600" />
						<div className="absolute -right-2 -bottom-2 h-4 w-4 border-r-2 border-b-2 border-blue-600" />

						<ImageWithFallback
							src={exampleImage}
							alt="Technical view"
							className="h-24 w-32 object-cover"
						/>
					</div>
				</div>

				{/* Axis Labels - Right side */}
				<div className="absolute text-xs tracking-wider text-blue-600">
					<div className="absolute top-[30%] right-[52%]">Y4</div>
					<div className="absolute top-[40%] right-[52%]">Y1</div>
					<div className="absolute top-[48%] right-[52%]">Y3</div>
					<div className="absolute top-[53%] right-[52%]">C.</div>
				</div>

				{/* Axis Labels - Left side */}
				<div className="absolute text-xs tracking-wider text-blue-600">
					<div className="absolute top-[44%] left-[30%]">Y6</div>
				</div>

				{/* Center vertical labels */}
				<div className="absolute left-1/2 text-xs tracking-wider text-blue-600">
					<div className="absolute top-[52%] -translate-x-1/2">Y6'</div>
					<div className="absolute top-[53%] right-[-30px] -translate-x-1/2">-Y2</div>
					<div className="absolute top-[59%] right-[-20px] -translate-x-1/2">-Y1</div>
					<div className="absolute top-[63%] -translate-x-1/2">-Y5</div>
					<div className="absolute top-[68%] -translate-x-1/2">-Y4</div>
				</div>

				{/* EXUSIAI label */}
				<div
					className="absolute top-[52%] left-[39%] text-xs tracking-wider text-blue-600 fade-in"
					style={{ animationDelay: '1.1s' }}
				>
					EXUSIAI.
				</div>

				{/* Bottom Left - THE marker */}
				<div
					className="absolute bottom-[22%] left-[10%] text-xs tracking-wider fade-in"
					style={{ animationDelay: '1.2s' }}
				>
					THE •
				</div>

				{/* Bottom Left - Caption with image */}
				<div className="absolute bottom-[15%] left-[5%] fade-in" style={{ animationDelay: '1.3s' }}>
					<div className="max-w-[200px] bg-gray-700/90 px-6 py-4 backdrop-blur-sm">
						<div className="absolute -top-3 -left-3 h-12 w-12 border-2 border-blue-600 bg-white/10" />
						<div className="text-sm text-white">A Glance at the Stars</div>
					</div>
				</div>

				{/* Bottom Left - Blue box with text */}
				<div className="absolute bottom-[5%] left-[10%] fade-in" style={{ animationDelay: '1.4s' }}>
					<div className="border-2 border-blue-600 bg-white px-4 py-3">
						<div className="space-y-0.5 text-xs tracking-wider text-blue-600">
							<div>YD</div>
							<div>NA</div>
							<div>MT</div>
						</div>
					</div>
				</div>

				{/* Bottom center - Icon placeholder */}
				<div
					className="absolute bottom-[20%] left-1/2 -translate-x-1/2 fade-in"
					style={{ animationDelay: '1.5s' }}
				>
					<div className="h-10 w-10 border-2 border-blue-600 bg-white" />
				</div>

				{/* Character Image - Left Side */}
				<div
					className="absolute top-[35%] left-[8%] cursor-pointer transition-transform fade-in hover:scale-105"
					style={{ animationDelay: '0.9s' }}
				>
					<div className="relative">
						<div className="absolute -top-3 -right-3 h-6 w-6 border-2 border-blue-600 bg-white" />
						<div className="absolute -bottom-2 -left-2 h-4 w-4 border-2 border-blue-600 bg-white" />
						<img
							src={characterImage}
							alt="Character"
							className="h-52 w-40 border-2 border-blue-600 bg-white object-contain p-2"
						/>
					</div>
				</div>

				{/* Main Title - FESNUK */}
				<div className="absolute top-[25%] right-[8%] fade-in" style={{ animationDelay: '0.5s' }}>
					<div className="rotate-2 border-4 border-blue-600 bg-white px-8 py-6">
						<h1 className="text-6xl tracking-tighter text-gray-900">FESNUK</h1>
						<div className="my-2 h-0.5 w-full bg-blue-600" />
						<p className="text-sm tracking-wider text-gray-600">TECHNICAL OPERATOR INTERFACE</p>
					</div>
				</div>

				{/* Lorem Ipsum Text Block - Top Right */}
				<div
					className="absolute top-[55%] right-[5%] max-w-xs fade-in"
					style={{ animationDelay: '1.1s' }}
				>
					<div className="-rotate-1 border border-blue-600 bg-white/90 p-6 backdrop-blur-sm">
						<h3 className="mb-2 text-sm tracking-wider text-blue-600">SECTION.01</h3>
						<h2 className="mb-3 text-gray-900">Operational Parameters</h2>
						<p className="text-xs leading-relaxed text-gray-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
				</div>

				{/* Second Text Block - Bottom Right */}
				<div
					className="absolute right-[35%] bottom-[8%] max-w-sm fade-in"
					style={{ animationDelay: '1.4s' }}
				>
					<div className="rotate-1 border-2 border-blue-600 bg-white p-5">
						<h3 className="mb-1 text-xs tracking-wider text-blue-600">DATA.STREAM</h3>
						<h2 className="mb-2 text-gray-900">System Configuration</h2>
						<p className="mb-3 text-xs leading-relaxed text-gray-600">
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
							ea commodo consequat.
						</p>
						<div className="flex gap-2">
							<button className="flex-1 bg-blue-600 px-4 py-2 text-xs tracking-wider text-white transition-colors hover:bg-blue-700">
								VIEW MORE
							</button>
						</div>
					</div>
				</div>

				{/* Action Buttons - Scattered */}
				<button
					className="absolute top-[65%] left-[25%] rotate-3 border-2 border-blue-600 bg-white px-6 py-3 text-blue-600 transition-all fade-in hover:rotate-0 hover:bg-blue-600 hover:text-white"
					style={{ animationDelay: '1.2s' }}
				>
					<div className="flex items-center gap-2">
						<Play className="h-4 w-4" />
						<span className="text-xs tracking-wider">START</span>
					</div>
				</button>

				<button
					className="absolute top-[75%] left-[15%] -rotate-2 border-2 border-blue-600 bg-blue-600 px-5 py-3 text-white transition-all fade-in hover:rotate-0 hover:bg-white hover:text-blue-600"
					style={{ animationDelay: '1.3s' }}
				>
					<div className="flex items-center gap-2">
						<Download className="h-4 w-4" />
						<span className="text-xs tracking-wider">DOWNLOAD</span>
					</div>
				</button>

				<button
					className="absolute right-[12%] bottom-[30%] -rotate-1 border-2 border-blue-600 bg-white px-6 py-3 text-blue-600 transition-all fade-in hover:rotate-0 hover:bg-blue-600 hover:text-white"
					style={{ animationDelay: '1.5s' }}
				>
					<div className="flex items-center gap-2">
						<Info className="h-4 w-4" />
						<span className="text-xs tracking-wider">INFO</span>
					</div>
				</button>

				{/* Small Interactive Box */}
				<div
					className="group absolute top-[25%] left-[42%] cursor-pointer transition-colors fade-in hover:bg-blue-600 hover:text-white"
					style={{ animationDelay: '0.7s' }}
				>
					<div className="border-2 border-blue-600 bg-white px-4 py-2">
						<span className="text-xs tracking-wider text-blue-600 group-hover:text-white">
							CLICK ME
						</span>
					</div>
				</div>

				{/* Additional Lorem Text - Left */}
				<div
					className="absolute top-[48%] left-[28%] max-w-[220px] fade-in"
					style={{ animationDelay: '1s' }}
				>
					<div className="border border-blue-600 bg-gray-900 p-4 text-white">
						<h3 className="mb-1 text-xs tracking-wider text-blue-400">LOG.ENTRY</h3>
						<p className="text-xs leading-relaxed opacity-90">
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
